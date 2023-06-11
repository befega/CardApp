import {
  Button,
  Container,
  Grid,
  Stack,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

let arr = [
  {
    id: 1,
    title: "Dağ 1",
    par: "Açıklama 1",
  },
  {
    id: 2,
    title: "Dağ 2",
    par: "Açıklama 2",
  },
  {
    id: 3,
    title: "Dağ 3",
    par: "Açıklama 3",
  },
];

const App = () => {
  const [title, setTitle] = useState("");
  const [par, setPar] = useState("");
  const [list, setList] = useState(arr);
  const [lesson] = useState([]);
  const click = () => {
    setTitle("");
    setPar("");
    setList([
      ...list,
      {
        id: 5,
        title,
        par,
      },
    ]);
  };
  return (
    <Container>
      <h1>Kart Oluşturma</h1>
      <Stack>
        <TextInput
          placeholder="Başlık yazın"
          label="Başlık"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Paragraf yazın"
          label="Paragraf"
          value={par}
          onChange={(e) => setPar(e.target.value)}
        />
        <Button
          onClick={click}
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan" }}
        >
          Kart Ekle
        </Button>
      </Stack>
      <p> Kartlar:</p>
      <Grid>
        {list.map(({ title, par }, i) => (
          <Grid.Col span={4} key={`index ${i}`}>
            <Card title={title} par={par} lesson={lesson} index={i} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
