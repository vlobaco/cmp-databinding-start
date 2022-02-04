import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  @Output() onServerAdded = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() onBlueprintAdded = new EventEmitter<{blueprintName: string, blueprintContent: string}>();

  constructor() { }

  ngOnInit(): void {
  }

}
