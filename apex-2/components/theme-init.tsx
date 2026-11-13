const theInitScript = `{
    function () {
        try {
            var stored = localStorage.getItem('theme');
            if (stored) {
                document.documentElement.dataset.theme = stored;
            }
        } catch {
})();`;

export const ThemeInit = () => {
    return (
        <script
            suppressHydrationWarning
            type="text/javascript"
            dangerouslySetInnerHTML={{__html: theInitScript}}
        ></script>
    )
}