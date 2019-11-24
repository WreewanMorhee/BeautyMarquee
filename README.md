## Beauty Marquee
Beauty Marquee is a plugin for whom want to use marquee.                         
You can                                          
use it to beautify your web                            
or                          
use is to show some message repeatly                          
[DEMO](https://event.hearst.com.tw/uiuxstoredemo/beautymarquee/)


## How to install
1. go to your terminal and type the following:
```bash
yarn add beauty-marquee
```

## How to use:
```html
<div class='beauty-marquee'>  // draw the region of marquee in this div, main on width and height
	<div class='outer-box'>  // give marquee css in this div
	   /* marquee content */
	 </div>
 </div>

<script src='node_modules/beauty-marquee/dist/BeautyMarquee.js'></script>
<script type='text/javascript'>
    BeautyMarquee.init({
      // the parameter below are all given default value except required value


      // Common Parameter
      class_name: '.beauty-marquee',  // (REQUIRED) the class want to use beauty-marquee  
      desktop_speed: 200,  // the moving speed of marquee in desktop
      mobile_speed: 150,  // the moving speed of marquee in mobile
      vertical: false,  // if true, marquee will move vertically

      // Advanced Parameter
      reverse: false,  // if your want marquee move reversely
      turn_on: true,  // if you don't want to trigger marquee, turn_on should be false
      stop_on_box_hover: false,  // if true, marquee will stop when hover marquee region
      stop_on_content_hover: false,  // if true, marquee will stop when hover marquee content
    })
</script>
```

## PS

If you want to have distance between each marquee item,            
give padding for outer box
```html
<div class='beauty-marquee'>
	<div class='outer-box'>  // this one
	   /* marquee content */
	 </div>
 </div>
````

## Thank You for Your Use
It's welcome to report me any issue or bug, thanks a lot!

## Author
[WreewanMorhee](https://github.com/WreewanMorhee)
