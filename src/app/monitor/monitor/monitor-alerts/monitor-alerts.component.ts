import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitor-alerts',
  templateUrl: './monitor-alerts.component.html',
  styleUrls: ['./monitor-alerts.component.css']
})
export class MonitorAlertsComponent implements OnInit {

  items = [
    {
      status: 'Unconfirmed',
      name: 'Trendset Mall',
      startTime: '02:00',
      occupancy: 'Commercial',
      disposition: 'New',
      confirmTime: '',
      responseTime: '',
      lat: 16.498510651609376, 
      lng: 80.6535938460216
    },
    {
      status: 'Active',
      name: 'Unity Office Building',
      startTime: '01:20',
      occupancy: 'Business',
      disposition: 'Acked',
      confirmTime: '01:21',
      responseTime: '01:23',
      lat: 16.501340890057094,  
      lng: 80.6433614517361
    }
  ];

  private audio: HTMLAudioElement;
  private intervalId: any;

  constructor() { 
    this.audio = new Audio('assets/beep-01a.mp3'); // Path to your sound file
  }

  ngOnInit(): void {
    var hasNewDisposition = this.items.some(item => item.disposition === 'New');
    if (hasNewDisposition) this.startBeeping();
  }

  startBeeping(): void {
    // Clear any existing intervals to prevent multiple beeping
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    // Start beeping every second
    this.intervalId = setInterval(() => {
      this.audio.play().catch(error => console.error('Error playing sound:', error));
    }, 1000); // Beep every second (1000 milliseconds)
  }

  stopBeeping(): void {
    // Clear the interval to stop beeping
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null; // Reset the interval ID
    }

    // Optionally pause the audio if it's currently playing
    this.audio.pause();
    this.audio.currentTime = 0; // Reset the audio to the beginning
  }  

  viewAlert(id: number): void {
    const url = '#monitor/alert/' + id;  // URL to open
    window.open(url, 'alert');  // Opens in a new tab
  }
}
