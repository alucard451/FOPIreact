
export function Link({links}){
    return (
        <a href={links.link}>
            <div class="header-page-item">
            {links.name}
            </div>
        </a>
    )
}