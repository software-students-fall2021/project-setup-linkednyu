import { Button } from "../../components/Button"

export default function Home() {
    return (
        <div className="homePage">
            <h1>Post page/Home page</h1>
            <Button onClick={() => console.log('clicked')}
                type="Button"
                buttonStyle="btn--primary--solid"
                buttonSize="btn--medium"
            > Click Here  </Button>
        </div>
    )
}
