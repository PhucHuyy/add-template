export class StudentCard {
    cardId: string;
    studentCardUrl: string;
    isDeleted: boolean;
  
    constructor(cardId: string, studentCardUrl: string, isDeleted: boolean) {
      this.cardId = cardId;
      this.studentCardUrl = studentCardUrl;
      this.isDeleted = isDeleted;
    }
  }
  