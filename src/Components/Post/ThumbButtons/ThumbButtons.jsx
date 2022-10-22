import { useState } from 'react';
import './ThumbButtons.css';

const ThumbButtons = (props) => {
    const [thumbUpButton, setThumbUpButton] = useState('inactive')
    const [thumbDownButton, setThumbDownButton] = useState('inactive')
    const [upImg, setUpImg] = useState(require('./ThumbsUpGray.png'))
    const [downImg, setDownImg] = useState(require('./ThumbsDownGrey.png'))
    

    function thumbUpClick(){
        if(thumbUpButton === 'inactive'){
            setThumbUpButton('thumb-up')
            setUpImg(require('./ThumbsUpGreen.png'))
            setThumbDownButton('inactive')
            setDownImg(require('./ThumbsDownGrey.png'))
        }
        else{
            setThumbUpButton('inactive')
            setUpImg(require('./ThumbsUpGray.png'))
        }
        
    }
    function thumbDownClick(){
        if(thumbDownButton ==='inactive'){
            setThumbDownButton('thumb-down')
            setDownImg(require('./ThumbsDownRed.png'))
            setThumbUpButton('inactive')
            setUpImg(require('./ThumbsUpGray.png'))
        }
        else{
            setThumbDownButton('inactive')
            setDownImg(require('./ThumbsDownGrey.png'))
        }
    }
    return ( 
        <div class="button">
        <img className={thumbUpButton} src={upImg} onClick={thumbUpClick} alt=''/>
        <img className={thumbDownButton} src={downImg} onClick={thumbDownClick} alt=''/>
        </div> 
     );
}
 
export default ThumbButtons;