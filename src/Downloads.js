import dl_icon from '../../workspase/my-react/src/image/dl.png'

export default function Download({isbn}) {
    return (
        <a href={`https://wings.msn.to/index.php/-/A-07/${isbn}/`}>
            <img src={dl_icon} alt="Sample Download" />
        </a>
    )
}