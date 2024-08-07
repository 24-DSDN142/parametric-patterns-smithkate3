//your parameter variables go here!

var y = 65 //brings lines across
var L = 55 //brings lines bottom of lines down
var lineY = 5 //brings top of lines down 

var x = 30 //changes small circle size

var circleY = 70 //changes larger circle size 

var rectX = 130 //brings bottom line of rectangle down. 

var triY = 55 //brings right point og triangle up and down 
var triX = 55 //brings left point of triangles up and down 
var triZ = 140 //brings right point of triangle side to side 

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;

}

function wallpaper_background() {
  background(255, 255, 255); //light honeydew green colour

  strokeWeight(0.5)
  stroke (255)
  fill(255,119,20)

}


function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  if(rectX > 135){

    strokeWeight(0)

    fill(255,119,72)
    triangle(5,110,5,200,100,200)//creates triangle in left corner
      
  }


  fill(254,100,0);
  circle(50,150, circleY);//left circle large 

  fill(254,255,0);
  circle(160,30,circleY-20);//right circle large

  line(195,20,10,190);//line through middle 

  fill(0,0,0);
  circle(80,180,x);//small circle at bottom

  fill(0,0,0);
  circle(140,20,x);//small circle at top 

  fill(0,118,255);
  rect(100,60,90,rectX);//large rectangle on right 
  
  fill(255,150,0);
  triangle(5,5,60,5,5,60);//top left corner triangle
  
  fill(0,58,255);
  triangle(190,190,190,110,100,190);//triangle in rectangle 
  
  line(195,20,10,190);//line through middle diagonal 
  
  fill(255,0,0);
  triangle(70,5,70,triX,triZ,triY);//middle triangle at top
  
  fill(255,150,255);
  rect(5,60,90,50);//rectangle on the left in middle
  
  line(y,lineY+0,15,L);
  line(y,lineY+5,20,L);
  line(y,lineY+10,25,L);
  line(y,lineY+15,30,L);
  line(y,lineY+20,35,L);
  line(y,lineY+25,40,L);
  line(y,lineY+30,45,L);
  line(y,lineY+35,50,L);
  line(y,lineY+40,55,L);
  line(y,lineY+45,60,L);
  //stripped lines at top 

}
