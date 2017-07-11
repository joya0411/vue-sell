<template>
    <div class="detail-title">
        <div class="line"></div>
        <div class="text">{{titleText}}</div>
        <div class="line"></div>
    </div>
</template>

<script>
    export default{
        props:['titleText']
    }
</script>

<style lang="stylus">
    .detail-title
        display:flex
        padding:0 36px
        justify-content:center
        align-items:center
        color:#fff;
        margin:28px 0 24px 0
        .line
            flex:1
            height:1px
            background:rgba(255,255,255,.2)
        .text
            padding:0 12px
            font-size:14px
            font-weight:700


</style>