//banner效果
{
    let imgs=document.querySelectorAll(".imgbox li");
    let pagers=document.querySelectorAll(".pagerbox li");
    let banner=document.querySelector("#banner");
    let next=document.querySelector(".next");
    let prev=document.querySelector(".prev");
    pagers.forEach(function(ele,index){
        ele.onclick=function(){
            for(let i=0;i<imgs.length;i++){
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            //this  ele   pagers[index]
            this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;
        }
    });
    let n=0;
    let t=setInterval(move,3000);
    function move(){
        n++;
        // n=n%5;
        if(n===imgs.length){
            n=0;
        }
        if(n<0){
            n=imgs.length-1;
        }
        for(let i=0;i<imgs.length;i++){
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
    }

    banner.onmouseenter=function(){
        clearInterval(t);
    };
    banner.onmouseleave=function(){
        t=setInterval(move,3000);
    };

    next.onclick=function(){
        move();
    };
    prev.onclick=function(){
        n-=2;
        move();
    };

}

//明星单品效果
{
    const prev=document.querySelector(".buy-prev");
    const next=document.querySelector(".buy-next");
    const inner=document.querySelector(".buy-inner");
    let n=0;  //移动的屏数
    next.onclick=function(){
        n++;
        prev.classList.remove("disable");
        if(n===2){
            this.classList.add("disable");
        }
        if(n===3){
            n=2;
            return;
        }
        inner.style.marginLeft=-992*n+"px";
    };
    prev.onclick=function(){
        n--;
        next.classList.remove("disable");
        if(n===0){
            prev.classList.add("disable");
        }
        if(n===-1){
            n=2;
            return;
        }
        inner.style.marginLeft=-992*n+"px";
    };
}

//内容区域效果
{
    function content(parent){
        const types=parent.querySelectorAll(".type");
        const goods=parent.querySelectorAll(".goodslist");
        types.forEach(function(ele,index){
            ele.onmouseenter=function(){
                for(let i=0;i<types.length;i++){
                    types[i].classList.remove("active");
                    goods[i].classList.remove("active");
                }
                this.classList.add("active");
                goods[index].classList.add("active");
            }
        })
    }
    const contentlist=document.querySelectorAll(".dapei");
    contentlist.forEach(function(ele){
        content(ele);
    })
}

//小内容区域效果
{
    function wheel(parent){
        let inner=parent.querySelector(".inner");
        let next=parent.querySelector(".al_next");
        let prev=parent.querySelector(".al_prev");
        let contents=parent.querySelectorAll(".yidong");
        let pagers=parent.querySelectorAll(".xiaoneirong_dian1");
        let n=0;
        next.onclick=function(){
            n++;
            if(n===contents.length){
                n=contents.length-1;
                return;
            }
            inner.style.left=n*-296+"px";
            pagers[n].classList.add("active");
            pagers[n-1].classList.remove("active");
            obj=pagers[n];
        };
        prev.onclick=function(){
            n--;
            if(n<0){
                n=0;
                return;
            }
            inner.style.left=n*-296+"px";
            pagers[n].classList.add("active");
            pagers[n+1].classList.remove("active");
            obj=pagers[n];
        };
        let obj=pagers[0];
        pagers.forEach(function(ele,index){
            ele.onclick=function(){
                obj.classList.remove("active");
                this.classList.add("active");
                obj=this;
                inner.style.left=index*-296+"px";
                n=index;
            }
        })
    }
    let items=document.querySelectorAll(".all");
    items.forEach(function(ele){
        wheel(ele);
    })
}

//侧导航区域效果
{
    let labels=document.querySelectorAll(".label");
    let menus=document.querySelectorAll(".menu");
    let obj=menus[0];
    labels.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.style.display="none";
            menus[index].style.display="block";
            obj=menus[index];
        };
        ele.onmouseleave=function(){
            menus[index].style.display="none";
        }
    })
}

//上栏出现效果
{
    let box=document.querySelectorAll(".daohangbox_bottom_itembox");
    // let top=document.querySelector(".daohangbox_top");
    let bottom=document.querySelector(".daohangbox_bottom");
    let shang=document.querySelectorAll(".topspan");
    shang.forEach(function(ele,index){
        ele.onmouseenter=function(){
            bottom.style.height="220px";
            bottom.style.borderTop="1px solid #ccc";
            box[index].style.display="block";
        };
        ele.onmouseleave=function(){
            bottom.style.height="0";
            bottom.style.borderTop="0";
            box[index].style.display="none";
        };
    })
}

//为你推荐区域效果
{
    const prev=document.querySelector(".tuijian-prev");
    const next=document.querySelector(".tuijian-next");
    const inner=document.querySelector(".tuijian-inner");
    let n=0;  //移动的屏数
    next.onclick=function(){
        n++;
        prev.classList.remove("disable");
        if(n===3){
            this.classList.add("disable");
        }
        if(n===4){
            n=3;
            return;
        }
        inner.style.marginLeft=-1226*n+"px";
    };
    prev.onclick=function(){
        n--;
        next.classList.remove("disable");
        if(n===0){
            prev.classList.add("disable");
        }
        if(n===-1){
            n=2;
            return;
        }
        inner.style.marginLeft=-1226*n+"px";
    };
}
