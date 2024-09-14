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
      lng: 80.6535938460216,
      dev_type: 'usb'
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
      lng: 80.6433614517361,
      dev_type: 'usb'
    },
    {
      status: 'Active',
      name: 'Rayalseema Ruchulu',
      startTime: '01:40',
      occupancy: 'Mercantile',
      disposition: 'Acked',
      confirmTime: '01:45',
      responseTime: '01:54',
      lat: 17.402951957127858,   
      lng: 78.4630093274499,
      dev_type: 'videocam'
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
    const url = '#/monitor/alert';// + id;  // URL to open
    alert(url);
    window.open(url, 'alert');  // Opens in a new tab
  }
}
