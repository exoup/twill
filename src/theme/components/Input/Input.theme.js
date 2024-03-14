// theme options
import FloatOptions from "./InputFloat.theme";

export const input = {
    defaultOptions: {
        color: 'default',
        radius: 'round',
        variant: 'floating',
    },
    styles: {
        initial: {
            container: {
                position: 'relative'
            }
        },
        radii: {
            round: 'rounded-md',
            sharp: 'rounded-none'
        },
        variants: {
            floating: FloatOptions,
            stacked: '',
        }
    }
};

export default input;