import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { AuthServiceService } from '../../services/auth.service';

@Component({
  selector: 'app-pro-profile',
  templateUrl: './pro-profile.component.html',
  styleUrl: './pro-profile.component.css',
})
export class ProProfileComponent {




  userName= "";
  coverPicUrl: string | ArrayBuffer | null = ''; //Cover Picture
  profilePicUrl: string | ArrayBuffer | null =
    '/assets/images/pro-profile/profile-pic.png'; // Profile Picture
  username: string = 'Username';
  jobTitle: string = 'Job Title';
  phone: string = 'Phone Number';
  linkedinUsername: string = 'LinkedIn Username';
  githubUsername: string = 'GitHub Username';
  bio: string = '';
  educationList: { name: string; startDate: string; endDate: string }[] = []; // Education list
  experienceList: { company: string; startDate: string; endDate: string }[] =
    []; // Experience list
  portfolio: string = '';
  languagesList: { name: string; level: string }[] = [];
  tempInput: string = '';
  fieldToEdit: string = ''; //variable to keep track of the current field being edited

  // Temporary properties for editing
  tempUsername: string = '';
  tempJobTitle: string = '';
  tempPhone: string = '';
  tempLinkedIn: string = '';
  tempGitHub: string = '';

  //fields for adding education, experience, and languages
  newEducation: { name: string; startDate: string; endDate: string } = {
    name: '',
    startDate: '',
    endDate: '',
  };
  selectedEducation: { name: string; startDate: string; endDate: string } = {
    name: '',
    startDate: '',
    endDate: '',
  };
  newExperience: { company: string; startDate: string; endDate: string } = {
    company: '',
    startDate: '',
    endDate: '',
  };
  selectedExperience: { company: string; startDate: string; endDate: string } =
    { company: '', startDate: '', endDate: '' };
  newLanguage: { name: string; level: string } = { name: '', level: '' };
  selectedLanguage: { name: string; level: string } = { name: '', level: '' };
  editingIndex: number | null = null; // Track editing for education, experience, and language

  constructor(private modalService: ModalService, public authService: AuthServiceService) {}


  getUsername() {
    this.userName = this.authService.getUsername();
    return this.userName;
  }



  // Method to open modal for editing Info fields.
  openEditModal(content: any): void {
    // Set temporary values to current profile information
    this.tempUsername = this.username;
    this.tempJobTitle = this.jobTitle;
    this.tempPhone = this.phone;
    this.tempLinkedIn = this.linkedinUsername;
    this.tempGitHub = this.githubUsername;

    // Open the modal
    this.modalService.open(content);
  }

  // Method to save changes from the modal
  saveChanges(): void {
    this.username = this.tempUsername;
    this.jobTitle = this.tempJobTitle;
    this.phone = this.tempPhone;
    this.linkedinUsername = this.tempLinkedIn;
    this.githubUsername = this.tempGitHub;
  }

  //Method to open modal for editing fields like experience, education, etc.
  openModal(content: any, field: string): void {
    // Store the current value in tempInput
    this.tempInput = this[field as keyof ProProfileComponent] as string;
    this.modalService.open(content).result.then(
      () => {
        // If the modal is closed, save the changes
        (this as any)[field] = this.tempInput;
      },
      () => {
        // If dismissed, clear tempInput
        this.tempInput = '';
      }
    );
  }

  //  Cover Picture Upload
  onCoverPicUpload(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => (this.coverPicUrl = e.target?.result || null);
      reader.readAsDataURL(target.files[0]);
    } else {
      console.error('No file selected');
    }
  }

  // Trigger file input for Cover picture
  onCoverPicClick(): void {
    const fileInput = document.getElementById(
      'profile-pic-upload'
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    } else {
      console.error('No file selected');
    }
  }

  // Profile Picture Upload
  onProfilePicUpload(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => (this.profilePicUrl = e.target?.result || null);
      reader.readAsDataURL(target.files[0]);
    } else {
      console.error('No file selected');
    }
  }

  // Trigger file input for profile picture
  onProfilePicClick(): void {
    const fileInput = document.getElementById(
      'profile-pic-upload'
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    } else {
      console.error('No file selected');
    }
  }

  //bio methods
  openBioModal(content: any): void {
    this.tempInput = this.bio; // Store current bio in tempInput
    this.modalService.open(content).result.then(
      () => {
        // Save the bio after closing the modal
        this.bio = this.tempInput || 'Add a short bio about yourself...';
      },
      () => {
        // If modal is dismissed, reset tempInput
        this.tempInput = '';
      }
    );
  }

  // Education Methods
  addEducation(content: any): void {
    this.newEducation = { name: '', startDate: '', endDate: '' }; // Reset input fields
    this.modalService.open(content).result.then(
      () => {
        if (
          this.newEducation.name &&
          this.newEducation.startDate &&
          this.newEducation.endDate
        ) {
          this.educationList.push({ ...this.newEducation });
        }
      },
      () => {
        this.newEducation = { name: '', startDate: '', endDate: '' }; // Reset on dismissal
      }
    );
  }

  addEducationToList(): void {
    if (
      this.newEducation.name &&
      this.newEducation.startDate &&
      this.newEducation.endDate
    ) {
      this.educationList.push({ ...this.newEducation });
      this.newEducation = { name: '', startDate: '', endDate: '' }; // Reset input after adding
    }
  }

  saveEducation(): void {
    if (
      this.newEducation.name &&
      this.newEducation.startDate &&
      this.newEducation.endDate
    ) {
      this.educationList.push({ ...this.newEducation });
      this.newEducation = { name: '', startDate: '', endDate: '' }; // Reset after saving
    }
  }

  // Experience Methods
  addExperience(content: any): void {
    this.newExperience = { company: '', startDate: '', endDate: '' }; // Reset input fields
    this.modalService.open(content).result.then(
      () => {
        if (
          this.newExperience.company &&
          this.newExperience.startDate &&
          this.newExperience.endDate
        ) {
          this.experienceList.push({ ...this.newExperience });
        }
      },
      () => {
        this.newExperience = { company: '', startDate: '', endDate: '' }; // Reset on dismissal
      }
    );
  }

  addExperienceToList(): void {
    if (
      this.newExperience.company &&
      this.newExperience.startDate &&
      this.newExperience.endDate
    ) {
      this.experienceList.push({ ...this.newExperience });
      this.newExperience = { company: '', startDate: '', endDate: '' }; // Reset input after adding
    }
  }

  saveExperience(): void {
    if (
      this.newExperience.company &&
      this.newExperience.startDate &&
      this.newExperience.endDate
    ) {
      this.experienceList.push({ ...this.newExperience });
      this.newExperience = { company: '', startDate: '', endDate: '' }; // Reset after saving
    }
  }

  onCVUpload(content: any): void {
    // Handle CV upload
    console.log('CV uploaded');
  }

  //portfolio methods
  onPortfolioUpload(content: any): void {
    console.log('Portfolio uploaded');
  }

  openPortfolioModal(content: any): void {
    this.tempInput = this.portfolio; // Store current bio in tempInput
    this.modalService.open(content).result.then(
      () => {
        // Save the portfolio after closing the modal
        this.bio = this.tempInput || 'Add your Portfolio link...';
      },
      () => {
        // If modal is dismissed, reset tempInput
        this.tempInput = '';
      }
    );
  }

  // Add new language
  addLanguage(content: any): void {
    this.newLanguage = { name: '', level: '' }; // Reset the new language input
    this.modalService.open(content).result.then(
      () => {
        // Push the new language to the list if valid
        if (this.newLanguage.name && this.newLanguage.level) {
          this.languagesList.push({ ...this.newLanguage });
        }
      },
      () => {
        // Reset in case of modal dismissal
        this.newLanguage = { name: '', level: '' };
      }
    );
  }

  addLanguageToList(): void {
    if (this.newLanguage.name && this.newLanguage.level) {
      this.languagesList.push({ ...this.newLanguage });
      this.newLanguage = { name: '', level: '' }; // Reset input after adding
    }
  }

  saveLanguage(): void {
    if (this.newLanguage.name && this.newLanguage.level) {
      this.languagesList.push({ ...this.newLanguage });
      this.newLanguage = { name: '', level: '' }; // Reset after saving
    }
  }


}
