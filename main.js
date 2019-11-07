//
// h2js-input.js
//

import ShellElement from 'h2js-element'

class Element extends ShellElement {
	constructor(opts){
		opts = opts||{}
		let name = 'input' // <-- change
		let C = `
			<style>
				.${name} {
					display: grid;
					height: 100%;
					place-items: stretch;
					}
				.${name} textarea {outline: none; border: none; resize:none; background: none; xborder-top: solid 1px #333; color: #eee; font: normal 16px arial; xmargin-top 3px; xpadding-top: 3px;
			color: #777;
			box-sizing: border-box;
			}

				::-xwebkit-input-placeholder {
						text-align: center;
						vertical-align: middle;

						height: 100%;
						box-sizing: border-box;
						border: solid 1px red;
						display: table-cell;
						line-height: 100%;
						}
				::-xwebkit-input-placeholder {
						box-sizing: border-box;
						display: grid;
						place-items: center;
						xheight: 100%;
						line-height: 100%;
						text-align: center;
						position: relative;
						top: calc(50% - 0.55em);
					}

				::-xwebkit-input-placeholder {
						height: 100%;
						text-align: center;
						position: relative;
						top: calc(50% - 0.55em);
					}

				::-webkit-input-placeholder {
					text-align: center;
					top: calc(50% - 0.70em);
					position: relative;
					}

					:-moz-placeholder { /* Firefox 18- */
					text-align: center;
					top: calc(50% - 0.70em);
					position: relative; 
					}

					::-moz-placeholder {  /* Firefox 19+ */
					text-align: center;
					top: calc(50% - 0.70em);
					position: relative;
					}

					:-ms-input-placeholder {  
					text-align: center;
					top: calc(50% - 0.70em);
					position: relative;
					}
				}

			</style>
			<div class='${name}'>
				<textarea ${opts.autofocus?'autofocus':''} placeholder='tap to edit'></textarea>
			</div>
			`

		super(name,C)

		let t = this.shadow.querySelector('textarea')

		t.onkeypress = e=>{
			let {key,code,which} = e
			let c = e.char

			if(!key && which == 13) //hack for other systems.
				key = 'Enter'

			if(key == 'Enter'){
				let {value} =  t
				if(value.trim() != ''){
					this.emit('value',value)
					}
				t.value = ''
				e.preventDefault()
				}//if
			}//func
	}//func
}//class

export default Element
