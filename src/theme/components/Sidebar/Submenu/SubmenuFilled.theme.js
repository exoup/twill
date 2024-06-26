const FilledOptions = {
    children: {
        base: {
            initial: 'space-y-1 px-4 mt-1',
        },
        style: {
            default: {
                initial: '',
            },
        }
    },
    details: {
        base: {
            initial: 'group/expandable',
        },
        style: {
            default: {
                initial: ''
            },
        }
    },
    summary: {
        base: {
            initial: 'list-none items-center justify-between py-2 px-4',
        },
        style: {
            default: {
                open: 'group-open/expandable:bg-light-accent group-open/expandable:dark:bg-dark-accent',
                hover: 'hover:bg-light-active/15 dark:hover:bg-dark-active/10',
            },
        }
    },
};

export default FilledOptions;