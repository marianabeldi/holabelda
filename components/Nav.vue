<template>
    <nav>
        <ul>
            <li class="logo-icon"><nuxt-link to="/"><svg viewBox="0 -10 180 180" width="30" height="30">
            <ellipse cx="90" cy="90" rx="86.36" ry="77.72" fill="#00b6c6"/>
            <path d="m43.39 3.64-.68 138.79 42.49-32.07 50 66 2-140-42.4 32.05Z" fill="#fee7a3"/>
            </svg>
            </nuxt-link></li>
            <li><nuxt-link to="/work">Work</nuxt-link></li>
            <li><nuxt-link to="/blog">Blog</nuxt-link></li>
            <li><nuxt-link to="/talks">Talks</nuxt-link></li>
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
        list-style-type: none;
        margin: 0;
        padding-left: 0;
    }
    li {
        margin: 0 1.5rem;
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
nav li:hover:not(.logo-icon) a:before, nav li.active a:before {
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
