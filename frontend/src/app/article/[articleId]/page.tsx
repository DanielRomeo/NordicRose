"use client"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

interface PostPageProps {
  params: {
      articleId: string
  }
}

const ArticlePage = ({params}: PostPageProps) => {
  const [postId, setPostId] = useState<string | null>();

  	return(
    	<div>
			<Container>
				<h3>
				hello world
				</h3>
			</Container>
    	</div>
  	)
};



export default ArticlePage;