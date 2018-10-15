import { Component } from '@angular/core';
import { HolidayService } from 'ts-holidays';

@Component({
  selector: 'sample-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  /**
   *
   */
  constructor() {
    const holidayService = new HolidayService();
    const isHoliday = holidayService.isHoliday(new Date());
    console.log(`isHoliday: ${isHoliday}`);
  }
}
