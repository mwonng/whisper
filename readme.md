# Whisper - A React Blog with Next.js

### Project description

I am using React as my main working language and my blog was built with Ruby on Rails, but I felt bad everytime I want to move my blog to another host, it will cost me a lot of time to setup code environment and database environment.(Now you can also set a [Docker](https://www.docker.com/) image with [Docker Compose](https://docs.docker.com/compose/) I guess)

However, for a blog, I want it te be simple and easy to be record as plain text which would be easier for technical guys. (Don't have any relationship in database) **I believe blog should not have any backend database for programmer**.

This did the very similar with [Jekyll](https://github.com/jekyll/jekyll) which GitHub supports well. 

The reason i started with this repository is I dont really like to learn a HTML template language as Liquid and Jekyll itself command which have to have Ruby installed, although i will alwasy have ruby installed in my computer but not everyone.

There is a better repo called [Next-blog](https://github.com/tscanlin/next-blog) which is better than my repo if you only want to setup you blog with React asap

### Update
#### 5 June, 2018
 - add api to run script in server side to generate /tmp/summary.js
 - remove useless fetch
 - add Now in readme

---

### Tech-stack
- [React](https://reactjs.org/) 
- [Express.js](https://expressjs.com/) for backend clean url
- [Next.js](https://github.com/zeit/next.js/) for server side rendering
- [Now](https://zeit.co/now) for deployment
- [Styled-components](https://www.styled-components.com/)
- [front-matter](https://github.com/jxson/front-matter) for read meta data in markdown
- [react-markdown](https://github.com/rexxars/react-markdown) for parsing markdown 

### Todo
- boilerplate
- update posts only by pushing to github

### Pull request
pull requests welcomed

### Contribution
- [Jason Wu](https://github.com/quatrejuin)