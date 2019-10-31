# H2JS Input Element 

-------------------
### Basic Usage
```sh
$ npm i -S h2js-input
```

index.html
```js
<script type='module'>
	import InputElement from 'h2js-input'
	
	let i = new InputElement()
	i.on('value',v=>{
		console.log('new value',v)
		})
	document.querySelector('body').appendChild(i.element)
</script>
```

