import ReactMarkdown from 'react-markdown'

export default function recievedRecipe(props){
    return (
        <section className='Recipe'>
            <ReactMarkdown>{props.Recipe}</ReactMarkdown>
        </section>
    )
}