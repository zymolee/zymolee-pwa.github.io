<template>
    <div class="home-page skeleton-wrapper">
        <div class="wraper">
            <div class="planet" @click="go3d">
                <div class="earth">
                    <img src="../static/img/home/earth.png"/>
                </div>
                <div class="rocket">
                    <div class="r-body">
                        <img src="../static/img/home/satellite-station.png"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'skeleton'
};
</script>

<style lang="stylus" scoped>
.home-page.skeleton-wrapper{
    width: 100vw;
        height: 100vh;
        display: flex;
        justify-content:center;
        align-items:center;
    .wraper{
        background: #000;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content:center;
        align-items:center;
        .planet{
            width:45vw;
            position:relative;
            .earth{
                transform: rotateZ(0deg);
                animation: rotateAni 8s linear infinite;
            }
            &:after{
                content: '';
                display:block;
                width:100%;
                height:100%;
                border-radius: 100%;
                overflow: hidden;

                position:absolute;
                top: 0;
                left: 0;
            }
            .rocket{
                position: absolute;
                top: 50%;
                left: 50%;
                transform-origin: 50% 50%;
                transform: translate(-50%,-50%);
                animation: rotateAni_r 6s linear infinite;
                .r-body{
                    position: absolute;
                    width: 10vw;
                    top: 50%;
                    left: 26vw;
                    animation: rotateAni 6s linear infinite;
                    // &:after{
                        // display:block;
                        // content: '';
                        // width:3vw;
                        // height:5vw;
                        // margin: -3vw auto 0;
                        // transform: rotateZ(180deg);
                        // background:url('../static/img/home/flame1.png') no-repeat;
                        // background-size: 300%;
                        // background-position-x: 0;
                        // animation: flame .2s step-start infinite;
                    // }
                }
            }
        }
    }
}
@keyframes rotateAni {
    0% {
        transform: rotateZ(0deg);
    }
    100% {
        transform: rotateZ(360deg);
    }
}
@keyframes rotateAni_r {
    0% {
        transform: rotateZ(0deg);
    }
    100% {
        transform: rotateZ(-360deg);
    }
}
@keyframes flame {
    0% {
        background-position-x: 0%;
    }
    33%{
        background-position-x: 50%;
    }
    66%{
        background-position-x: 99%;
    }
    100% {
        background-position-x: 0%;
    }
}
</style>
