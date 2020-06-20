import React from "react"
import {graphql} from 'gatsby'

const IndexPage = (data) => {
  var images = data.data.allFile.edges
  console.log(images)
  return(
    <div style={{position:"fixed", top:"0", left:"0", height:"100vh", width:"100vw"}}>
    <div style={{display:"flex", overflowX:"scroll"}}>
      {images.map((image,index) => {
        return(
          <div key={index} id={index} tabIndex={index} 
              style={{padding:'20px', marginBottom:'auto', marginTop:'auto'}}>
              <picture>
                  <source type='image/webp' 
                      sizes={image.node.childImageSharp.fluid.sizes}
                      srcSet={image.node.childImageSharp.fluid.srcSetWebp}/>
                  <source 
                      sizes={image.node.childImageSharp.fluid.sizes}
                      srcSet={image.node.childImageSharp.fluid.srcSet}/>
                  
                  <img sizes={image.node.childImageSharp.fluid.sizes} 
                      srcSet={image.node.childImageSharp.fluid.srcSet}
                      src={image.node.childImageSharp.fluid.src}
                      loading='lazy' alt={`modal-${index}`} style={{maxHeight:'90vh', maxWidth:'85vw'}}/>
              </picture>
          </div>
        )
        })
      }
    </div>
    </div>
  )
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex:"/Gallery/"}})
    {
      edges{
        node{
          id, childImageSharp{
                     fluid(maxWidth:3840, maxHeight:2160, quality:72 fit:INSIDE){
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default IndexPage
