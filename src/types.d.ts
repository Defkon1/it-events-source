type EventInfo = {
  id: string;
  name: string;
  description: string;
  date: string;
  link: string;
  tags: string;
  location: string;
};

type ModalData = {
  date: Date;
  events: EventInfo[];
};

type MonthInfo = {
  startDate: Date;
  events: EventInfo[];
};
