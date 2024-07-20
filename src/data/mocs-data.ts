import { Folder } from '../types';

const MOCKDATA: Folder = {
  id: 'root',
  name: 'Root',
  type: 'folder',
  children: [
    {
      id: 'documents',
      name: 'Documents',
      type: 'folder',
      children: [
        {
          id: 'resume',
          name: 'Resume.docx',
          type: 'file',
          content: 'This is a resume document.'
        },
        {
          id: 'cover_letter',
          name: 'CoverLetter.docx',
          type: 'file',
          content: 'This is a cover letter document.'
        },
        {
          id: 'projects',
          name: 'Projects',
          type: 'folder',
          children: [
            {
              id: 'project1',
              name: 'Project1.txt',
              type: 'file',
              content: 'Details about Project 1.'
            },
            {
              id: 'project2',
              name: 'Project2.txt',
              type: 'file',
              content: 'Details about Project 2.'
            }
          ]
        }
      ]
    },
    {
      id: 'pictures',
      name: 'Pictures',
      type: 'folder',
      children: [
        {
          id: 'vacation',
          name: 'Vacation',
          type: 'folder',
          children: [
            {
              id: 'beach',
              name: 'Beach.png',
              type: 'file',
              content: '',
              url: 'https://via.placeholder.com/200x150?text=Beach'
            },
            {
              id: 'mountains',
              name: 'Mountains.png',
              type: 'file',
              content: '',
              url: 'https://via.placeholder.com/200x150?text=Mountains'
            }
          ]
        },
        {
          id: 'family',
          name: 'Family',
          type: 'folder',
          children: [
            {
              id: 'birthday',
              name: 'Birthday.png',
              type: 'file',
              content: '',
              url: 'https://via.placeholder.com/200x150?text=Birthday'
            },
            {
              id: 'holiday',
              name: 'Holiday.png',
              type: 'file',
              content: '',
              url: 'https://via.placeholder.com/200x150?text=Holiday'
            }
          ]
        }
      ]
    },
    {
      id: 'music',
      name: 'Music',
      type: 'folder',
      children: [
        {
          id: 'rock',
          name: 'Rock',
          type: 'folder',
          children: [
            {
              id: 'song1',
              name: 'Song1.mp3',
              type: 'file',
              content: 'Rock song 1 content.'
            },
            {
              id: 'song2',
              name: 'Song2.mp3',
              type: 'file',
              content: 'Rock song 2 content.'
            }
          ]
        },
        {
          id: 'jazz',
          name: 'Jazz',
          type: 'folder',
          children: [
            {
              id: 'song3',
              name: 'Song3.mp3',
              type: 'file',
              content: 'Jazz song 1 content.'
            },
            {
              id: 'song4',
              name: 'Song4.mp3',
              type: 'file',
              content: 'Jazz song 2 content.'
            }
          ]
        }
      ]
    }
  ]
};

export default MOCKDATA