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
          sx={{
            width: 120,
            height: 120,
            mb: 2,
            userSelect: "none",
            border: "4px solid var(--foreground)",
          }}
        />
        <Typography variant="h4" component="h1" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          Hello! I am Levent, a passionate developer with a deep interest in
          building innovative web applications using modern technologies. Over
          the years, I’ve gained hands-on experience in the ever-evolving tech
          landscape, particularly in web development. I believe in continuous
          learning and actively participate in various developer communities to
          exchange knowledge and keep up with the latest trends. My goal is to
          always push the boundaries of what’s possible with technology, while
          striving for simplicity and scalability in my work.
        </Typography>
        <Typography variant="body1" paragraph>
          I had the opportunity to work as an intern software engineer at{" "}
          <Link href="/" color="primary">
            TÜBİTAK BİLGEM
          </Link>
          , where I contributed to building advanced systems and learned a great
          deal about real-world software engineering practices. My technical
          expertise spans a wide range of modern web technologies, including
          React, Next.js, Node.js, and Java Spring. Additionally, I have
          experience working with serverless architecture and cloud-based
          solutions, which has allowed me to develop highly scalable and
          efficient applications. I am always excited to explore new tools and
          frameworks that help improve the development process and enhance user
          experience.
        </Typography>
        <Typography variant="body1" paragraph>
          Outside of my professional life, I enjoy a variety of creative
          activities. I’m an avid fan of movies, TV series, and anime, which
          inspire me and help me unwind. One of my biggest passions is drawing
          and sketching – it’s a hobby that allows me to express my creativity
          and relax. I also love exploring emerging technologies, experimenting
          with new programming paradigms, and staying up-to-date with the latest
          advancements in the tech world. When I’m not coding, you can often
          find me on linkedin.
        </Typography>
        <Typography variant="body1" paragraph>
          If you’re interested in technology and development, feel free to
          connect with me on social media or check out my blog for more
          insights, tutorials, and musings on the world of programming. You can
          also reach out via email. All the details are available on my blog.
          Let’s build something amazing together!
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
