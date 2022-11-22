import React, { useState, useEffect, useContext } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { styles } from './style';
import AxiosInstance from '../../api/AxiosInstance';
import { DataContext } from '../../context/DataContext';
import { DadosEditoraType } from '../../models/DadosEditoraType';

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <ImageBackground source={{ uri: item.urlImagem, }} resizeMode="cover" style={styles.image}>
            <Text style={[styles.title, textColor]}>{item.nomeEditora}</Text>
        </ImageBackground>
    </TouchableOpacity>
);

const Home = () => {
    const { dadosUsuario } = useContext(DataContext);
    const [dadosEditora, setDadosEditora] = useState<DadosEditoraType[]>([]); //dentro do <> está dizendo que esse useState é do tipo DadosEditoraType, que é um array
    const [selectedId, setSelectedId] = useState(null);

    //quando a página carregar, ele usa esse método e pega os dados das editoras
    useEffect(() => {
        getAllEditoras();
    }, []);

    const getAllEditoras = async () => {
        //passando o token no cabeçalho da requisição, se não, não vai carregar nada
        AxiosInstance.get('/editoras', {
            headers: { "Authorization": `Bearer ${dadosUsuario?.token}` }
        }).then(
            resultado => {
                console.log('Dados das editoras ' + JSON.stringify(resultado.data));
                setDadosEditora(resultado.data);
            }).catch((error) => {
                console.log('Erro ' + JSON.stringify(error))
            });
    };

    const renderItem = ({ item }) => {
        const backgroundColor = item.codigoEditora === selectedId ? "#6e3b6e" : "#f9c2ff";
        //const color = item.codigoEditora === selectedId ? 'white' : 'white';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.codigoEditora)}
                backgroundColor={{ backgroundColor }}
                //textColor={{ color }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={dadosEditora}
                renderItem={renderItem}
                keyExtractor={(item) => item.codigoEditora}
                extraData={selectedId}
                horizontal={true}
            />
        </View>
    );
}

export default Home