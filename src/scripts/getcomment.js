import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";
import React from "react";
import "../styles/getdiscussion.css"

const baseURL = "https://commute-api-server.herokuapp.com/discussions/comment";

export default function Getdiscussion() {
  const [post, setPost] = React.useState(null);

  React.useEffect(  () => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  console.log(post)



  return (
    <div > 
     
      {post.results.map(item => ( 
        
       <div >
         
       <Card  sx={{ minWidth: 275 }}>
           <div className="card">
      <CardContent>
        <Typography   variant="h5" color="text.secondary" gutterBottom>
        {item.message}
        </Typography>
        
      
      </CardContent>
      </div>
      
        <Button size="small">comment</Button>
      
    </Card>
          


      </div>
      ))}


    </div>
  );
}