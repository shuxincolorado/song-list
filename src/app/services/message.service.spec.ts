import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('add message the first time, size should be 1', () => {
    service.add("test");
    expect(service.messages).toHaveSize(1);
  });

  it('verify first message', () => {
    service.add("test1");
    service.add("test2");
    let storedMessages = service.messages;
    let firstMessage = storedMessages[0];
    let secondMessage = storedMessages[1];
    expect(firstMessage).toBe("test1");
  });

  it('verify 2nd message', () => {
    service.add("test1");
    service.add("test2");
    let storedMessages = service.messages;
    let firstMessage = storedMessages[0];
    let secondMessage = storedMessages[1];
    expect(secondMessage).toBe("test2");
  });

  it('clear message will change message array to empty', () => {
    let storedMessage = service.clear();
    expect(storedMessage).toBeUndefined;
  });

});
