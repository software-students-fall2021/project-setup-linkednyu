import React from 'react'
import PostBox from '../../components/PostBox'

const listPosts = ({ posts }) => {
	return (
		<div>
			{posts.map(
				(tasks) => (
					<PostBox 
						key = {posts.id} 
						post = {posts}
					/>
				)
			)}
		</div>
	)
}

export default listPosts
