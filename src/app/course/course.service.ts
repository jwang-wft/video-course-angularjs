import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Topic } from './topic.model';
import { Section } from './section.model';
import { Lecture } from './lecture.model';
import { Source } from './source.model';
import { Injectable } from '@angular/core';

const REST_URL = 'http://localhost:8000/';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private topics: Topic[] = [];

  // topics = [
  //   { id: '1', title: 'AngularJS 字符动画显示', zipPath: 'This is the first post\'s content', creator: 'John'},
  //   { id: '2', title: '安装 Eclipse', zipPath: 'This is the second post\'s content', creator: 'John' },
  //   { id: '3', title: '安装 VS Code', zipPath: 'This is the third post\'s content', creator: 'John' },
  //   { id: '4', title: '安装 Tomcat Server', zipPath: 'This is the third post\'s content', creator: 'John' }
  // ];
  // lectures1: Lecture[] = [
  //   {id: 1, title: 'lecture title 1'},
  //   {id: 2, title: 'lecture title 2'},
  //   {id: 3, title: 'lecture title 3'},
  //   {id: 4, title: 'lecture title 4'},
  // ];

  // lectures2: Lecture[] = [
  //   {id: 5, title: 'lecture title 5'},
  //   {id: 6, title: 'lecture title 6'},
  // ];
  // section1: Section = { id: 1, title: 'section 1 title', lectures: this.lectures1};
  // section2: Section = { id: 2, title: 'section 1 title', lectures: this.lectures2};

 // sections: Section[] = [this.section1, this.section2];
  sections: Section[] = [];
  sourceCode: Source;

  private topicsUpdated = new Subject<Topic[]>();
  private sectionsUpdated = new Subject<Section[]>();
  private sourceUpdated = new Subject<Source>();

  constructor(private http: HttpClient) {}

  getSourceCode(fileName: string) {
    const url = REST_URL + 'source/' + fileName;
    console.log(url);
    this.http.get<Source>(url).subscribe((sourceData) => {
      this.sourceCode = sourceData;
      this.sourceUpdated.next(this.sourceCode);
    });
    return this.sourceCode;
  }

  getTopics() {
    this.http.get<Topic[]>(REST_URL + 'topics').subscribe((postData) => {
        this.topics = postData;
        this.topicsUpdated.next([...this.topics]);
      });
    return this.topics;
  }


  getSections(topicId: string) {
    const url = REST_URL + 'sections';
    console.log(url);
    this.http.get<Section[]>(url).subscribe((postData) => {
        this.sections = postData;
        this.sectionsUpdated.next([...this.sections]);
      });
    return this.sections;
  }

  getTopicUpdateListener() {
    return this.topicsUpdated.asObservable();
  }

  getSourceUpdateListener() {
    return this.sourceUpdated.asObservable();
  }

  getSectionUpdateListener() {
    return this.sectionsUpdated.asObservable();
  }

  addTopic(title: string, zipPath: string, creator: string) {
    const topic: Topic = { id: null, title: title, zipPath: zipPath, creator: creator};
    this.topics.push(topic);
    this.topicsUpdated.next([...this.topics]);
  }


}
