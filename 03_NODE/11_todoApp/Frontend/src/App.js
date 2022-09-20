import { useQuery } from 'react-query';

import { ChakraProvider, Box, Flex, Divider } from '@chakra-ui/react';
import Todo from './components/Todo';
import FormTodo from './components/FormTodo';
import Nada from './components/Nada';

function App() {
	const { isLoading, data } = useQuery('todo', () =>
		fetch('http://localhost:4000/api/v1/todo').then((res) => res.json())
	);
	return (
		<ChakraProvider>
			<Box bg="gray.100" minH="100vh" py={16}>
				<Flex
					as="main"
					alignItems="center"
					justifyContent="flex-start"
					flexDirection="column"
					margin="10 auto"
				>
					<FormTodo />
					<Divider orientation="horizontal" />
					{isLoading ? <div>Loding......</div> : null}
					{data?.data.length > 0 ? (
						data.data.map((todo) => <Todo key={todo._id} todo={todo} />)
					) : (
						<Nada></Nada>
					)}

					{/* {data?.data?.map((post) => (
          <Post key={post._id} post={post} />
        ))} */}
				</Flex>
			</Box>
		</ChakraProvider>
	);
}

export default App;
