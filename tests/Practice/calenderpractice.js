export class Calender{
    constructor(page){
        this.page = page;
        this.dateInput = '#dateAndTimePickerInput';
    }
    async datePicker(day,month,year,time){
       //click on the date field
        await this.page.locator(this.dateInput).click();

        //select month
        await this.page.locator('.react-datepicker__month-read-view').click();
        await this.page.getByText(month , {exact :true}).click();

        //select year
        await this.page.locator('.react-datepicker__year-read-view').click();
        await this.page.getByText(year, {exact :true}).click();

        //select date
        const date = String(day).padStart(3,'0');
        await this.page.locator(`.react-datepicker__day--${date}:not(.react-datepicker__day--outside-month)`).click();

        //select time
        await this.page.locator('.react-datepicker__time-list-item').filter({hasText : time}).click();
    }
}