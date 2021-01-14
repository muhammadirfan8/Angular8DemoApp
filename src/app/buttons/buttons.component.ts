import { Component, OnInit, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonsComponent {

  public imageUrl = 'https://demos.telerik.com/kendo-ui/content/shared/icons/sports/snowboarding.png';

  public splitButtonItems: Array<any> = [{
      text: 'Keep Text Only',
      icon: 'paste-plain-text',
      click: () => { console.log('Keep Text Only click handler'); }
  }, {
      text: 'Paste as HTML',
      icon: 'paste-as-html'
  }, {
      text: 'Paste Markdown',
      icon: 'paste-markdown'
  }, {
      text: 'Set Default Paste'
  }];

  public dropDownButtonItems: Array<any> = [{
      text: 'My Profile'
  }, {
      text: 'Friend Requests'
  }, {
      text: 'Account Settings'
  }, {
      text: 'Support'
  }, {
      text: 'Log Out'
  }];

  public chips: Array<any> = [
      {
          label: 'Pedro Afonso',
          iconClass: 'k-chip-avatar pedro'
      },
      {
          label: 'Thomas Hardy',
          iconClass: 'k-chip-avatar thomas'
      },
      {
          label: 'Christina Berg',
          iconClass: 'k-chip-avatar christina'
      },
      {
          label: 'Paula Wilson',
          iconClass: 'k-chip-avatar paula'
      }
  ];

  public onSplitButtonClick(): void {
      console.log('Paste');
  }

  public onSplitButtonItemClick(dataItem: any): void {
      if (dataItem) {
          console.log(dataItem.text);
      }
  }

  public onButtonClick() {
      console.log('click');
  }

  public data: Array<any> = [{
    text: 'Keep Text Only',
    icon: 'paste-plain-text',
    click: () => { console.log('Keep Text Only'); }
}, {
    text: 'Paste as HTML',
    icon: 'paste-as-html',
    click: () => { console.log('Paste as HTML'); }
}, {
    text: 'Paste Markdown',
    icon: 'paste-markdown',
    click: () => { console.log('Paste Markdown'); }
}, {
    text: 'Set Default Paste',
    click: () => { console.log('Set Default Paste'); }
}];

public onPaste(): void {
    console.log('Paste');
}
}
