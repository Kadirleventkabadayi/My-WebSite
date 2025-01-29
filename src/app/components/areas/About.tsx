import { Container, Typography, Box, Avatar, Link } from "@mui/material";

function About() {
  return (
    <Container
      sx={{
        minHeight: "90vh",
        width: "100%",
        m: 0,
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
        <Avatar
          alt="Levent"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9y6VvHr6HIPDQ1K8uwe_0qDH20HqHxloTg&s"
          sx={{ width: 100, height: 100, mb: 2, userSelect: "none" }}
        />
        <Typography variant="h4" component="h1" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          Hello! I am Levent, a passionate developer with experience in building
          web applications using modern technologies. I love to learn and share
          knowledge with the community.
        </Typography>
        <Typography variant="body1" paragraph>
          I worked as a intern software engineer at the{" "}
          <Link href="/" color="primary">
            TÜBİTAK BİLGEM
          </Link>
          . I have experience in building web applications using React, Next,
          Node.js and Java Spring. I am also familiar with serverless
          architecture.
        </Typography>
        <Typography variant="body1" paragraph>
          In my free time, I enjoy reading, play chess, and exploring new
          technologies. Feel free to connect with me on social media or check
          out my blog for more insights and tutorials.
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
