import './PostBox.css'


const PostBox = ({title,userName,courseName,time, imageSrc,imageSrc1, content}) => {
	return (
		<div className="container">
			<div className = 'task'>
				<div className = "header">
					<img src = {imageSrc} alt="" width = '100px' height = '100px'></img>
					<h3>{userName}</h3>
					<h3>{courseName}</h3>
					<h3>{time}</h3>
				</div>
				<h1>{title}</h1>
				<img src = {imageSrc1} alt="" width = '200px' height = '200px' ></img>
				<p>{content}</p>
			</div>
			
		</div>
		
	)
}

export default PostBox