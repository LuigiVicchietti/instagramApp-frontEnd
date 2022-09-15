import React from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  StatusBar,

} from 'react-native';

import style from './css/style.js';

export default function App() {

  return (
    <View style={style.container}>
      <StatusBar
        animated={true} />

      {/* header */}
      <View style={style.header}>
        <View style={style.logoInsta}>
          <Image
            style={style.imgInsta}
            source={require('./assets/img/logoInsta.png')}
          />
        </View>
        <View style={style.atividadesHeader}>
          <Image
            style={style.iconesHeaderPostar}
            source={require('./assets/img/iconePostar.png')}
          />
          <Image
            style={style.iconesHeaderLike}
            source={require('./assets/img/iconeLike2.png')}
          />
          <Image
            style={style.iconesHeaderDirect}
            source={require('./assets/img/iconeDirect.png')}
          />
        </View>
      </View>

      {/* ScrollView */}
      <ScrollView style={style.scrollviewPosts}>

        {/* Stories */}
        <View style={style.viewStories}>
          <ScrollView
            style={style.scrollviewStories}
            horizontal={true}
          >
            <View style={style.storiePlus}>
              <View style={style.elementsStoriePlus}>
                  <Image
                    style={style.imgPlus}
                    source={require('./assets/img/perfilFooter.jpeg')}
                  />
                  <Image
                    style={style.imgPlusIcone}
                    source={require('./assets/img/imgPlus.png')}
                  />
              </View>
              <Text style={style.textStories}> Seu story</Text>
            </View>

            <View style={style.stories}>
              <View style={style.backgroundStories}>
                <Image
                  style={style.imgStories}
                  source={require('./assets/img/leohChad.jpeg')}
                />
              </View>
              <Text style={style.textStories}> Le0H_</Text>
            </View>

            <View style={style.stories}>
              <View style={style.backgroundStories}>
                <Image
                  style={style.imgStories}
                  source={require('./assets/img/nicollasChad.jpeg')}
                />
              </View>
              <Text style={style.textStories}> nicollas.BP</Text>
            </View>

            <View style={style.stories}>
              <View style={style.backgroundStories}>
                <Image
                  style={style.imgStories}
                  source={require('./assets/img/LulugaoChad.jpeg')}
                />
              </View>
              <Text style={style.textStories}> yLu1Gi</Text>
            </View>

            <View style={style.stories}>
              <View style={style.backgroundStories}>
                <Image
                  style={style.imgStories}
                  source={require('./assets/img/joelmaChad.jpeg')}
                />
              </View>
              <Text style={style.textStories}> Hjoklar</Text>
            </View>

            <View style={style.stories}>
              <View style={style.backgroundStories}>
                <Image
                  style={style.imgStories}
                  source={require('./assets/img/juliaChad.jpeg')}
                />
              </View>
              <Text style={style.textStories}> aRufino</Text>
            </View>

            <View style={style.stories}>
              <View style={style.backgroundStories}>
                <Image
                  style={style.imgStories}
                  source={require('./assets/img/rhianChad.jpeg')}
                />
              </View>
              <Text style={style.textStories}> yDarks</Text>
            </View>

            <View style={style.stories}>
              <View style={style.backgroundStories}>
                <Image
                  style={style.imgStories}
                  source={require('./assets/img/lucasChad.jpeg')}
                />
              </View>
              <Text style={style.textStories}> lucaspndl</Text>
            </View>

          </ScrollView>
        </View>

        {/* Posts */}
        <View style={style.viewPosts}>

          {/* Post 1 */}
          <View style={style.headerPosts}>
            <View style={style.autorPosts}>
              <Image
                style={style.autorPost}
                source={require('./assets/img/uelitoPerfil.jpeg')}
              />
              <Text style={style.nomeAutor}> Wellington2004</Text>
            </View>
            <View style={style.icone3p}>
              <Image
                style={style.tresPontos}
                source={require('./assets/img/icone3p.png')}
              />
            </View>
          </View>
          <View style={style.post}>
            <Image
              style={style.postPadrao}
              source={require('./assets/img/soninBom.jpeg')}
            />
          </View>
          <View style={style.atividadesPosts}>
            <View style={style.funcoesPosts}>
              <View style={style.interacoesPosts}>
                <Image
                  style={style.iconeLikePost}
                  source={require('./assets/img/iconeLike2.png')}
                />
                <Image
                  style={style.iconeComentarPost}
                  source={require('./assets/img/iconeComments.png')}
                />
                <Image
                  style={style.iconeEnviarPost}
                  source={require('./assets/img/iconeEnviar.png')}
                />
              </View>

              <View style={style.salvarPost}>
                <Image
                  style={style.iconeSalvar}
                  source={require('./assets/img/iconeSalvar.png')}
                />
              </View>
            </View>
          </View>
          <View style={style.curtidas}>
            <Text style={style.textBold}> 252 curtidas</Text>
          </View>
          <View style={style.descricaoPost}>
            <Text style={style.textDescricao}> <Text style={style.textBold}>Wellington2004</Text> Soninho gostoso hein. O cochilo da <Text style={style.textLink}>@aRufino</Text>.</Text>
          </View>
          <View style={style.descricaoPost}>
            <Text style={style.textDescricao}> <Text style={style.textBold}>aRufino</Text> Vou te processar por uso indevido de imagem.</Text>
          </View>
          <Text style={style.textResposta}> <Text>|  </Text><Text style={style.textBold}>yLu1Gi</Text> Espero que so seja ele KKKKKKKKKKKKKKKKK.</Text>
          <View style={style.descricaoPost}>
            <Text style={style.textCinza}> Ver todos os outros 10 comentários</Text>
          </View>

          {/* Post 2 */}
          <View style={style.headerPosts}>
            <View style={style.autorPosts}>
              <View style={style.backgroundStoriesPost}>
                <Image
                  style={style.autorStoriesPost}
                  source={require('./assets/img/nicollasChad.jpeg')}
                />
              </View>
              <Text style={style.nomeAutor}> nicollas.BP</Text>
            </View>
            <View style={style.icone3p}>
              <Image
                style={style.tresPontos}
                source={require('./assets/img/icone3p.png')}
              />
            </View>
          </View>
          <View style={style.post}>
            <Image
              style={style.postPadrao}
              source={require('./assets/img/tresPatetas.jpeg')}
            />
          </View>
          <View style={style.atividadesPosts}>
            <View style={style.funcoesPosts}>
              <View style={style.interacoesPosts}>
                <Image
                  style={style.iconeLikePost}
                  source={require('./assets/img/iconeLike2.png')}
                />
                <Image
                  style={style.iconeComentarPost}
                  source={require('./assets/img/iconeComments.png')}
                />
                <Image
                  style={style.iconeEnviarPost}
                  source={require('./assets/img/iconeEnviar.png')}
                />
              </View>

              <View style={style.salvarPost}>
                <Image
                  style={style.iconeSalvar}
                  source={require('./assets/img/iconeSalvar.png')}
                />
              </View>
            </View>
          </View>
          <View style={style.curtidas}>
            <Text style={style.textBold}> 190 curtidas</Text>
          </View>
          <View style={style.descricaoPost}>
            <Text style={style.textDescricao}> <Text style={style.textBold}>nicollas.BP</Text> O <Text style={style.textLink}>@yLu1Gi</Text> registrando a boa do <Text style={style.textLink}>@Hjoklar</Text>.</Text>
          </View>
          <View style={style.descricaoPost}>
            <Text style={style.textDescricao}> <Text style={style.textBold}>yLu1Gi</Text> KKKKKKKKKKKKKKKKKKKKKKK simplismente o melhor.</Text>
          </View>
          <View style={style.descricaoPost}>
            <Text style={style.textDescricao}> <Text style={style.textBold}>Hjoklar</Text> Tanta rola no mundo e eu aqui chupando picolé.</Text>
          </View>
          <View style={style.descricaoPost}>
            <Text style={style.textCinza}> Ver todos os outros 19 comentários</Text>
          </View>
        </View>

        {/* Post 3 */}
        <View style={style.headerPosts}>
          <View style={style.autorPosts}>
            <View style={style.backgroundStoriesPost}>
              <Image
                style={style.autorStoriesPost}
                source={require('./assets/img/leohChad.jpeg')}
              />
            </View>
            <Text style={style.nomeAutor}> Le0H_</Text>
          </View>
          <View style={style.icone3p}>
            <Image
              style={style.tresPontos}
              source={require('./assets/img/icone3p.png')}
            />
          </View>
        </View>
        <View style={style.post}>
          <Image
            style={style.postAlternativo}
            source={require('./assets/img/fibraOptica.jpeg')}
          />
        </View>
        <View style={style.atividadesPosts}>
          <View style={style.funcoesPosts}>
            <View style={style.interacoesPosts}>
              <Image
                style={style.iconeLikePost}
                source={require('./assets/img/iconeLike2.png')}
              />
              <Image
                style={style.iconeComentarPost}
                source={require('./assets/img/iconeComments.png')}
              />
              <Image
                style={style.iconeEnviarPost}
                source={require('./assets/img/iconeEnviar.png')}
              />
            </View>

            <View style={style.salvarPost}>
              <Image
                style={style.iconeSalvar}
                source={require('./assets/img/iconeSalvar.png')}
              />
            </View>
          </View>
        </View>
        <View style={style.curtidas}>
          <Text style={style.textBold}> 557 curtidas</Text>
        </View>
        <View style={style.descricaoPost}>
          <Text style={style.textDescricao}> <Text style={style.textBold}>Le0H_</Text> <Text style={style.textLink}> #TBT</Text> do nosso trabalho bosta. <Text style={style.textLink}>@yLu1Gi</Text> <Text style={style.textLink}>@nicollas.BP</Text></Text>
        </View>
        <View style={style.descricaoPost}>
          <Text style={style.textDescricao}> <Text style={style.textBold}>yLu1Gi</Text> Deus me livre.</Text>
        </View>
        <View style={style.descricaoPost}>
          <Text style={style.textDescricao}> <Text style={style.textBold}>VmdGab</Text> Pq o Leoh tá com barriga de choop?</Text>
        </View>
        <View style={style.descricaoPost}>
          <Text style={style.textCinza}> Ver todos os outros 37 comentários</Text>
        </View>

        {/* Post 4 */}
        <View style={style.headerPosts}>
          <View style={style.autorPosts}>
            <View style={style.backgroundStoriesPost}>
              <Image
                style={style.autorStoriesPost}
                source={require('./assets/img/LulugaoChad.jpeg')}
              />
            </View>
            <Text style={style.nomeAutor}> yLu1Gi</Text>
          </View>
          <View style={style.icone3p}>
            <Image
              style={style.tresPontos}
              source={require('./assets/img/icone3p.png')}
            />
          </View>
        </View>
        <View style={style.post}>
          <Image
            style={style.postPadrao}
            source={require('./assets/img/pontePreta.jpeg')}
          />
        </View>
        <View style={style.atividadesPosts}>
          <View style={style.funcoesPosts}>
            <View style={style.interacoesPosts}>
              <Image
                style={style.iconeLikePost}
                source={require('./assets/img/iconeLike2.png')}
              />
              <Image
                style={style.iconeComentarPost}
                source={require('./assets/img/iconeComments.png')}
              />
              <Image
                style={style.iconeEnviarPost}
                source={require('./assets/img/iconeEnviar.png')}
              />
            </View>

            <View style={style.salvarPost}>
              <Image
                style={style.iconeSalvar}
                source={require('./assets/img/iconeSalvar.png')}
              />
            </View>
          </View>
        </View>
        <View style={style.curtidas}>
          <Text style={style.textBold}> 100 curtidas</Text>
        </View>
        <View style={style.descricaoPost}>
          <Text style={style.textDescricao}> <Text style={style.textBold}>yLu1Gi</Text> Trajado com a peita,fi. Esquecer tudo.</Text>
        </View>
        <View style={style.descricaoPost}>
          <Text style={style.textDescricao}> <Text style={style.textBold}>VmdGab</Text> Sai dai, mlk. Vai torcer pro curintia.</Text>
        </View>
        <Text style={style.textResposta}> <Text>|  </Text><Text style={style.textBold}>yLu1Gi</Text> Prefiro a morte.</Text>
        <View style={style.descricaoPost}>
          <Text style={style.textDescricao}> <Text style={style.textBold}>Ordnael_leandro</Text> Tô cogitando em torcer pra poderosa pq o fla...</Text>
        </View>
        <View style={style.descricaoPost}>
          <Text style={style.textCinza}> Ver todos os outros 19 comentários</Text>
        </View>

        {/* Post 5 */}
        <View style={style.headerPosts}>
          <View style={style.autorPosts}>
            <Image
              style={style.autorPost}
              source={require('./assets/img/myata.jpeg')}
            />
            <Text style={style.nomeAutor}> Myata</Text>
          </View>
          <View style={style.icone3p}>
            <Image
              style={style.tresPontos}
              source={require('./assets/img/icone3p.png')}
            />
          </View>
        </View>
        <View style={style.post}>
          <Image
            style={style.postPadrao}
            source={require('./assets/img/rip.jpeg')}
          />
        </View>
        <View style={style.atividadesPosts}>
          <View style={style.funcoesPosts}>
            <View style={style.interacoesPosts}>
              <Image
                style={style.iconeLikePost}
                source={require('./assets/img/iconeLike2.png')}
              />
              <Image
                style={style.iconeComentarPost}
                source={require('./assets/img/iconeComments.png')}
              />
              <Image
                style={style.iconeEnviarPost}
                source={require('./assets/img/iconeEnviar.png')}
              />
            </View>

            <View style={style.salvarPost}>
              <Image
                style={style.iconeSalvar}
                source={require('./assets/img/iconeSalvar.png')}
              />
            </View>
          </View>
        </View>
        <View style={style.curtidas}>
          <Text style={style.textBold}> 3000 curtidas</Text>
        </View>
        <View style={style.descricaoPost}>
          <Text style={style.textDescricao}> <Text style={style.textBold}>Myata</Text> Que horrivel ter que anunciar isso... RIP Shaolin</Text>
        </View>
        <View style={style.descricaoPost}>
          <Text style={style.textDescricao}> <Text style={style.textBold}>Nunes_Ceara</Text> Ainda não acredito nisso, estou desolado ;-;</Text>
        </View>
        <Text style={style.textResposta}> <Text>|  </Text><Text style={style.textBold}>Myata</Text> Vai deixar muitas saudades...</Text>
        <View style={style.descricaoPost}>
          <Text style={style.textDescricao}> <Text style={style.textBold}>clodoaldo</Text> Meus sentimentos aos familiares e amigos :(</Text>
        </View>
        <View style={style.descricaoPost}>
          <Text style={style.textCinza}> Ver todos os outros 2000 comentários</Text>
        </View>

        {/* Post 6 */}
        <View style={style.headerPosts}>
          <View style={style.autorPosts}>
            <Image
              style={style.autorPost}
              source={require('./assets/img/ceara.jpeg')}
            />
            <Text style={style.nomeAutor}> Nunes_Ceara</Text>
          </View>
          <View style={style.icone3p}>
            <Image
              style={style.tresPontos}
              source={require('./assets/img/icone3p.png')}
            />
          </View>
        </View>
        <View style={style.post}>
          <Image
            style={style.postPadrao2}
            source={require('./assets/img/treta.jpeg')}
          />
        </View>
        <View style={style.atividadesPosts}>
          <View style={style.funcoesPosts}>
            <View style={style.interacoesPosts}>
              <Image
                style={style.iconeLikePost}
                source={require('./assets/img/iconeLike2.png')}
              />
              <Image
                style={style.iconeComentarPost}
                source={require('./assets/img/iconeComments.png')}
              />
              <Image
                style={style.iconeEnviarPost}
                source={require('./assets/img/iconeEnviar.png')}
              />
            </View>

            <View style={style.salvarPost}>
              <Image
                style={style.iconeSalvar}
                source={require('./assets/img/iconeSalvar.png')}
              />
            </View>
          </View>
        </View>
        <View style={style.curtidas}>
          <Text style={style.textBold}> 348 curtidas</Text>
        </View>
        <View style={style.descricaoPost}>
          <Text style={style.textDescricao}> <Text style={style.textBold}>Nunes_Ceara</Text> Poder da amizade S2. <Text style={style.textLink}>@VmdGab</Text> <Text style={style.textLink}>@yLu1Gi</Text> <Text style={style.textLink}>@mariaSEP</Text></Text>
        </View>
        <View style={style.descricaoPost}>
          <Text style={style.textDescricao}> <Text style={style.textBold}>VmdGab</Text> Relaxa gente, ele nn vai me matar nn.</Text>
        </View>
        <Text style={style.textResposta}> <Text>|  </Text><Text style={style.textBold}>yLu1Gi</Text> Se tu me deixar na mão de novo, ai eu te mato.</Text>
        <View style={style.descricaoPost}>
          <Text style={style.textCinza}> Ver todos os outros 13 comentários</Text>
        </View>

        {/* Post 7 */}
        <View style={style.headerPosts}>
          <View style={style.autorPosts}>
            <View style={style.backgroundStoriesPost}>
              <Image
                style={style.autorStoriesPost}
                source={require('./assets/img/rhianChad.jpeg')}
              />
            </View>
            <Text style={style.nomeAutor}> yDarks</Text>
          </View>
          <View style={style.icone3p}>
            <Image
              style={style.tresPontos}
              source={require('./assets/img/icone3p.png')}
            />
          </View>
        </View>
        <View style={style.post}>
          <Image
            style={style.postPadrao}
            source={require('./assets/img/rhian.jpeg')}
          />
        </View>
        <View style={style.atividadesPosts}>
          <View style={style.funcoesPosts}>
            <View style={style.interacoesPosts}>
              <Image
                style={style.iconeLikePost}
                source={require('./assets/img/iconeLike2.png')}
              />
              <Image
                style={style.iconeComentarPost}
                source={require('./assets/img/iconeComments.png')}
              />
              <Image
                style={style.iconeEnviarPost}
                source={require('./assets/img/iconeEnviar.png')}
              />
            </View>

            <View style={style.salvarPost}>
              <Image
                style={style.iconeSalvar}
                source={require('./assets/img/iconeSalvar.png')}
              />
            </View>
          </View>
        </View>
        <View style={style.curtidas}>
          <Text style={style.textBold}> 700 curtidas</Text>
        </View>
        <View style={style.descricaoPost}>
          <Text style={style.textDescricao}> <Text style={style.textBold}>yDarks</Text> Este homem ama games.</Text>
        </View>
        <View style={style.descricaoPost}>
          <Text style={style.textDescricao}> <Text style={style.textBold}>yLu1Gi</Text> Esse é meu patrão.</Text>
        </View>
        <Text style={style.textResposta}> <Text>|  </Text><Text style={style.textBold}>yDarks</Text> Vc ainda me deve aquele aperto na buzanfa!!!!</Text>
        <View style={style.descricaoPost}>
          <Text style={style.textDescricao}> <Text style={style.textBold}>lucaspndl</Text> LEBROOOOOOOOOOOOOOOOOOOOOON.</Text>
        </View>
        <View style={style.descricaoPost}>
          <Text style={style.textCinza}> Ver todos os outros 11 comentários</Text>
        </View>

        {/* Post 8 */}
        <View style={style.headerPosts}>
          <View style={style.autorPosts}>
            <View style={style.backgroundStoriesPost}>
              <Image
                style={style.autorStoriesPost}
                source={require('./assets/img/lucasChad.jpeg')}
              />
            </View>
            <Text style={style.nomeAutor}> lucaspndl</Text>
          </View>
          <View style={style.icone3p}>
            <Image
              style={style.tresPontos}
              source={require('./assets/img/icone3p.png')}
            />
          </View>
        </View>
        <View style={style.post}>
          <Image
            style={style.postPadrao}
            source={require('./assets/img/lucasPinguim.jpeg')}
          />
        </View>
        <View style={style.atividadesPosts}>
          <View style={style.funcoesPosts}>
            <View style={style.interacoesPosts}>
              <Image
                style={style.iconeLikePost}
                source={require('./assets/img/iconeLike2.png')}
              />
              <Image
                style={style.iconeComentarPost}
                source={require('./assets/img/iconeComments.png')}
              />
              <Image
                style={style.iconeEnviarPost}
                source={require('./assets/img/iconeEnviar.png')}
              />
            </View>

            <View style={style.salvarPost}>
              <Image
                style={style.iconeSalvar}
                source={require('./assets/img/iconeSalvar.png')}
              />
            </View>
          </View>
        </View>
        <View style={style.curtidas}>
          <Text style={style.textBold}> 667 curtidas</Text>
        </View>
        <View style={style.descricaoPost}>
          <Text style={style.textDescricao}> <Text style={style.textBold}>lucaspndl</Text> "Quase fui pra vida errada, graças a Deus eu tenho o dom".</Text>
        </View>
        <View style={style.descricaoPost}>
          <Text style={style.textDescricao}> <Text style={style.textBold}>yLu1Gi</Text> Aerofólio para meu palio.</Text>
        </View>
        <View style={style.descricaoPost}>
          <Text style={style.textDescricao}> <Text style={style.textBold}>yDarks</Text> <Text style={style.textLink}>@bcRaff</Text> que se cuide.</Text>
        </View>
        <View style={style.descricaoPost}>
          <Text style={style.textCinza}> Ver todos os outros 44 comentários</Text>
        </View>
      </ScrollView>

      <View style={style.footer}>
        <View style={style.atividadesFooter}>
          <Image
            style={style.iconesFooterHome}
            source={require('./assets/img/iconeHome.png')}
          />
          <Image
            style={style.iconesFooter}
            source={require('./assets/img/iconePesquisa.png')}
          />
          <Image
            style={style.iconesFooter}
            source={require('./assets/img/iconeReels.png')}
          />
          <Image
            style={style.iconesFooterShop}
            source={require('./assets/img/iconeShop.png')}
          />
          <Image
            style={style.perfilFooter}
            source={require('./assets/img/perfilFooter.jpeg')}
          />
        </View>

      </View>
    </View>
  );
};
