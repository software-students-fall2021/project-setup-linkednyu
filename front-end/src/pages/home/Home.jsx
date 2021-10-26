import { Button } from "../../components/Button"
import PostBox from "../../components/PostBox"

export default function Home() {
    return (
        <div className="homePage">
            <h1>Post page/Home page</h1>
            <Button onClick={() => console.log('clicked')}
                type="Button"
                buttonStyle="btn--primary--solid"
                buttonSize="btn--medium"
            > Click Here  </Button>
            <PostBox title='foo' userName='willis' courseName='CalIII' time='10/23/2021' imageSrc="" imageSrc1="" content='It means STOP CODING AND FEED HER DRIED CLOVE FISH!!!' />
        </div>
    )
}
