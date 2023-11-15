import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tableConfig = {
    rowType: 'expandable'
  };
  displayedColumns = ['firstName','lastName','studentEmail','course','yearOfStudy', 'action'];
  tableDataSource = new MatTableDataSource<any>(
    [
      {
        "firstName": "John",
        "lastName": "Doe",
        "studentEmail": "johndoe@example.com",
        "course": "Bsc Software Engineering",
        "yearOfStudy": 2,
        relationships: [
          {
            "firstName": "Nicola",
            "lastName": "Testla",
            "studentEmail": "kolya_flash@gmail.com",
          },
          {
            "firstName": "Test4",
            "lastName": "Test4",
            "studentEmail": "test@example.com",
          }
        ]
      },
      {
        "firstName": "Nicola",
        "lastName": "Testla",
        "studentEmail": "kolya_flash@gmail.com",
        "course": "Physics",
        "yearOfStudy": 4
      },
      {
        "firstName": "Test3",
        "lastName": "Test3",
        "studentEmail": "test3@example.com",
        "course": "Bsc Computer Science",
        "yearOfStudy": 4
      },
      {
        "firstName": "Test4",
        "lastName": "Test4",
        "studentEmail": "test@example.com",
        "course": "Bsc Computer Science",
        "yearOfStudy": 4
      }
    ]
  );

  ngOnInit() {
  }
}
