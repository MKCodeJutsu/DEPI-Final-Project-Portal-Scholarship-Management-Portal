import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
/************************************
     User Data and Authentication
 ***********************************/

/* An array of user objects with their usernames and passwords */
private users = [
  { username: 'Muhammed', password: 'admin123' },
  { username: 'Esraa', password: 'admin123' },
  { username: 'Hadeer', password: 'admin123' },
  { username: 'Eslam', password: 'admin123' },
  { username: 'Rania', password: 'admin123' },
  { username: 'Asmaa', password: 'admin123' }
];

/* Flag indicating if a user is authenticated or not */
private authenticated = false;

/* Stores the currently logged-in user */
private currentUser: any = null;

/************************************
     User Login Logic
 ***********************************/

/*
   Function to login a user by checking if the username and password match
   If successful, sets authenticated to true and stores the current user
*/
login(username: string, password: string): boolean {
  const user = this.users.find(u => u.username === username && u.password === password);

  // If a matching user is found, authenticate and store user info
  if (user) {
    this.authenticated = true;
    this.currentUser = user;
    return true;  // Login success
  }

  return false;  // Login failure
}

/************************************
     User Logout Logic
 ***********************************/

/*
   Logs out the current user by resetting the authentication flag
   and clearing the currentUser information
*/
logout() {
  this.authenticated = false;
  this.currentUser = null;
}

/************************************
     Authentication Status Check
 ***********************************/

/* Returns whether a user is currently authenticated or not */
isAuthenticated() {
  return this.authenticated;
}

/************************************
     Get Logged-in Username
 ***********************************/

/* Returns the username of the currently logged-in user (if any) */
getUsername() {
  return this.currentUser?.username;
}

  constructor() { }
}
