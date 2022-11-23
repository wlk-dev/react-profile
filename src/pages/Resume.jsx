import React from 'react'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import resume from "./resume.pdf"


const Resume = () => {
    const docs = [{ uri: resume }];
    
    return (
        <>
            <h1>Resume</h1>
            <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
        </>
    )
}
export default Resume