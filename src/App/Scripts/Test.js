//
//Test JavaScript File
//



(function(){

    
const HomeBG = document.getElementById('Home_BG');

    function MouseCoords (event){

        

        let cX = event.clientX;
        let cY = event.clientY;
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;

        let PosX = (cX/windowWidth)-0.5;
        let PosY = (cY/windowHeight)-0.5;

        // console.log(PosX + ',' + PosY);
        
        TweenLite.to(HomeBG, 0.6, {
                rotationY: 5*PosX, 
                rotationX: 5*PosY, ease: 
                Power1.easeOut, 
                transformPerspective: 900, 
                transformOrigin: 'center'})
    }


    const AnimateHomeBG = (event) => {

                const HomeBGImage = document.getElementById('Home_BG-Image');

                let cX = event.clientX;
                let cY = event.clientY;
                let windowWidth = window.innerWidth;
                let windowHeight = window.innerHeight;

                let PosX = (cX/windowWidth)-0.5;
                let PosY = (cY/windowHeight)-0.5;

                console.log(PosX + ',' + PosY);
                console.log(HomeBGImage);
                
                
        
                TweenMax.to(HomeBGImage, 0.6, {
                        rotationY: 5*PosX, 
                        rotationX: 5*PosY, ease: 
                        Power1.easeOut, 
                        transformPerspective: 900, 
                        transformOrigin: 'center'})
                

            };

    

}());


