# Notes App CLI 📒

## Overview
This CLI-based notes app allows users to manage their notes efficiently using various commands. It's built with Node.js and uses Yargs for command-line argument parsing, and Chalk for colorful console outputs. 

## Commands

### `add <note>`
Create a new note.

**Usage:**
```bash
note add "Your note content here" --tags "tag1,tag2" 
```
# Options:

- `note`: The content of the note you want to create.
- `--tags` or `-t`: (Optional) Comma-separated tags to add to the note.

Example:

```bash
note add "Buy groceries" --tags "shopping,chores"
```
### `all`
Retrieve all notes.

**Usage:**
``` bash
note all
```

### `find <filter>`
Get notes matching the given filter.

**Usage:**
```bash
note find <filter>
```
### `remove <id>`
Remove a note by its ID.

**Usage:**
```bash
note remove <id>
```
### `clean`
Remove all notes.

**Usage:**
```bash
note clean
```

## Installation
1. Clone the repository.
```bash
   git clone https://github.com/tanmaysuryawanshi/cli-notesapp-nodejs.git
```
2. Navigate to the project directory
```bash
   cd cli-notesapp-nodejs
```
3. Navigate to the project directory
```bash
   npm install
```
4. create a link using npm
```bash
   npm link
```

## Testing
The app is tested using Jest. To run tests, use:
```bash
npm test
```