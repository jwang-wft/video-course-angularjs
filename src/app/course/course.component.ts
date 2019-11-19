import { Component, VERSION, OnInit, Input, OnDestroy } from '@angular/core';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { CourseService } from './course.service';
import { Topic } from './topic.model';
import { Section } from './section.model';
import { Source } from './source.model';
import { Lecture } from './lecture.model';
import { Subscription } from 'rxjs';
import { callbackify } from 'util';
import { TEMPORARY_NAME } from '@angular/compiler/src/render3/view/util';
import { getLocaleTimeFormat } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {
  VIDEO_SERVICE_URL = 'http://localhost:8000/videos/';

  topics: Topic[] = [];
  sections: Section[] = [];
  private topicsSub: Subscription;
  private sectionsSub: Subscription;
  private sourceSub: Subscription;

  constructor(public courseService: CourseService) {}
  selectedTopicId = '2';

  version = VERSION.full;
  appversion: String = '1.0.1'; // (<any>buildInfo)['version'];

  ngclass = 'mat-video-responsive';

  src = '';
  title = '';
  maintitile = '网络视频教学园地';
  topic = '免费课程';
  width = 640;
  height = 480;
  autoplay = false;
  preload = true;
  loop = false;
  quality = true;
  download = true;
  fullscreen = true;
  keyboard = true;
  color = 'primary';
  spinner = 'spin';
  poster = 'http://localhost:8000/videos/giphy.gif';
  rest: Boolean = false;
  type = '';
  sourceCode: string | ArrayBuffer = '';
  _reset(reset: Boolean) {
    this.rest = reset;
  }

  onLectureChanged(lecture: Lecture) {
    if (lecture.poster) {
      this.poster = this.VIDEO_SERVICE_URL + lecture.poster;
      console.log(this.poster);
    }
    this.title = lecture.title;
    // this.poster = 'assets/giphy.gif';
    this.src = this.VIDEO_SERVICE_URL + lecture.videoFilePath;
    this.courseService.getSourceCode(lecture.sourceFilePath);
    this.courseService.getSourceCode(lecture.sourceFilePath);
    this.sourceSub = this.courseService
      .getSourceUpdateListener()
      .subscribe((source) => {
        this.sourceCode = source.content;
    });
    // if (lecture.videoFilePath.indexOf('Animation') >= 0) {
    //   this.src =
    //     "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";
    // } else {
    //   // this.src = "https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4";
    //   this.src = "http://localhost:8080/videos/Animation.mp4";
    // }
    // this.sourceCode = lecture.sourceFilePath;
    // this.loadSourceCode();
  }

  onLoad() {
    const topicId = this.selectedTopicId;
    this.sections = this.courseService.getSections(topicId);
    this.sectionsSub = this.courseService
      .getSectionUpdateListener()
      .subscribe((sections: Section[]) => {
        this.sections = sections;
      });
  }

  ngOnInit() {
    this.topics = this.courseService.getTopics();
    this.topicsSub = this.courseService
      .getTopicUpdateListener()
      .subscribe((topics: Topic[]) => {
        this.topics = topics;
      });
    this.sections = this.courseService.getSections('1');
    this.sectionsSub = this.courseService
      .getSectionUpdateListener()
      .subscribe((sections: Section[]) => {
        this.sections = sections;
      });
  }

  ngOnDestroy() {
    this.topicsSub.unsubscribe();
  }

  selectedItem(event: any) {
    console.log(event);
  }
}
