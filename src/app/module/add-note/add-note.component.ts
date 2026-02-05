import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NoteService } from '../../service/note.service';
import { Note } from '../../model/note';
import Quill from 'quill';

@Component({
  selector: 'app-add-note',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css'
})
export class AddNoteComponent implements OnInit, AfterViewInit {
  @ViewChild('editor', { static: false }) editorElement!: ElementRef;

  noteForm!: FormGroup;
  quillEditor!: Quill;
  isSubmitting = false;
  errorMessage = '';

  // Hardcoded user ID for now - in production, get from auth service
  private readonly userId = '4ec84d44-4ae3-4a66-87a7-fccbae35f824';

  constructor(
    private fb: FormBuilder,
    private noteService: NoteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.noteForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      content: ['', Validators.required],
      favourite: [false],
      notificationDate: ['']
    });
  }

  ngAfterViewInit(): void {
    // Initialize Quill editor with a small delay to ensure DOM is ready
    setTimeout(() => {
      if (!this.editorElement) {
        console.error('Editor element not found!');
        return;
      }

      try {
        console.log('Initializing Quill editor...');
        this.quillEditor = new Quill(this.editorElement.nativeElement, {
          theme: 'snow',
          modules: {
            toolbar: [
              [{ 'header': [1, 2, 3, false] }],
              [{ 'font': [] }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              ['bold', 'italic', 'underline', 'strike'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'align': [] }],
              ['clean']
            ]
          },
          placeholder: 'Write your note content here...'
        });

        console.log('Quill editor initialized successfully');

        // Update form value when editor content changes
        this.quillEditor.on('text-change', () => {
          const htmlContent = this.quillEditor.root.innerHTML;
          this.noteForm.patchValue({ content: htmlContent });
        });
      } catch (error) {
        console.error('Error initializing Quill:', error);
      }
    }, 0);
  }

  onSubmit(): void {
    if (this.noteForm.invalid) {
      this.noteForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    const formValue = this.noteForm.value;
    const note: Note = {
      id: '', // Backend will generate
      title: formValue.title,
      content: formValue.content,
      favourite: formValue.favourite,
      notificationDate: formValue.notificationDate ? new Date(formValue.notificationDate) : new Date()
    };

    this.noteService.addNote(this.userId, note).subscribe({
      next: (response) => {
        console.log('Note created successfully:', response);
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error creating note:', error);
        this.errorMessage = 'Failed to create note. Please try again.';
        this.isSubmitting = false;
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }

  get title() { return this.noteForm.get('title'); }
  get content() { return this.noteForm.get('content'); }
}
