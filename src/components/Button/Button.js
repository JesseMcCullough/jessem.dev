export default function Button({ data, className }) {
    if (!data) {
        return <a className={className} style={{ opacity: 0 }}></a>;
    }

    const text = data?.text;
    const url = data?.url;
    const openNewTab = data?.openNewTab;
    const noReferrer = data?.noReferrer;

    const target = openNewTab ? "_blank" : "";
    const rel = noReferrer ? "noreferrer" : "";

    return (
        <a className={className} href={url} target={target} rel={rel}>
            {text}
        </a>
    );
}
