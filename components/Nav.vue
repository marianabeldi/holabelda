<template>
    <nav>
        <ul>
            <li><nuxt-link to="/">Hola</nuxt-link></li>
            <li><nuxt-link to="/work">Work</nuxt-link></li>
            <li><nuxt-link to="/blog">Blog</nuxt-link></li>
        </ul>
    </nav>
</template> 

<style lang="scss" scoped>
nav {
    background-color: white;
    border-bottom: 6px double var(--green);
    font-size: 1.5rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9;
     ul {
        align-items: center;
        display: flex;
        justify-content: center;
        height: var(--navH);
    }
    li {
        margin: 0 1.5em;
        position: relative;
        a {
            color: var(--red);
        }
        &:hover a {
            color: var(--green);
            text-decoration: none;
        }
    }
}
nav li:hover a:before, nav li.active a:before {
    content: "";
    background: url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 30"><path fill="%2300b6c6" d="M.1 0L0 22.4l6.2-5.2 7.3 10.7.3-22.7-6.2 5.2L.1 0z"/></svg>') no-repeat;
    display: block;
    height: 22px;
    width: 14px;
    position: absolute;
    left: -22px;
    top: 2px;
}
</style>
