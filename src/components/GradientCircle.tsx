interface Props {
    position?: React.ComponentProps<'div'>['className']
}


export default function GradienCircle (props: Props){
    return (
        <div style={{background:"radial-gradient(50% 50% at 50% 50%, #1276C5 0%, rgba(18, 118, 197, 0.00) 100%)"}} className={`w-[400px] h-[400px] absolute ${props.position}`}></div>
    )
}