import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public form!: FormGroup;
  public form2!: FormGroup;

  constructor( private _fb: FormBuilder){
    this.form = this._fb.group({
      color: [null],
      opacity: [.5],
      padding: [2],
      width: [2],
      height: [2],
      scale: [1]
    })

    this.form2 = this._fb.group({
      color: [null],
      opacity: [.5],
      padding: [2],
      scale: [1],
      text: ['text here'],
      x:[50],
      y:[140],
      w: [100]
    })
  }

  test() {
    console.log('test', this.form.value)
  }

  test2() {
    console.log('test2', this.form2.value)
  }

  get formControl() {
    return this.form.controls
  }
  get formControl2() {
    return this.form2.controls
  }

  getNgStyle() {
		const style: any = {};

		if (!this.formControl['height'].value) {
			style['height.px'] = this.formControl['height'].value;
		}

		if (this.formControl['scale'].value) {
			style['transform'] = `scale(${this.formControl['scale'].value})`;
		}

    if (!this.formControl['width'].value) {
			style['width.px'] = this.formControl['width'].value;
		}

		style.fill = this.formControl['color'].value;

		if (this.formControl['padding']) {
			style['padding.px'] = this.formControl['padding'].value;
		}

		if (this.formControl['opacity'].value) {
			style.opacity = this.formControl['opacity'].value;
		}

		return style;
	}

  getNgStyle2() {
		const style: any = {};
		if (this.formControl2['scale'].value) {
			style['transform'] = `scale(${this.formControl2['scale'].value})`;
		}

		style.fill = this.formControl2['color'].value;

		if (this.formControl2['padding']) {
			style['padding.px'] = this.formControl2['padding'].value;
		}

		if (this.formControl2['opacity'].value) {
			style.opacity = this.formControl2['opacity'].value;
		}

		return style;
	}
}

